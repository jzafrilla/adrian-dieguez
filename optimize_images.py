#!/usr/bin/env python3
"""
Script para optimizar imágenes para web.
Redimensiona a máximo 1600px de ancho y comprime con calidad 85%.
"""

import os
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Error: Pillow no está instalado.")
    print("Ejecuta: pip install Pillow")
    exit(1)

# Configuración
MAX_WIDTH = 1600
QUALITY = 85
IMAGES_DIR = Path(__file__).parent / "public" / "images"

def get_file_size_mb(path):
    """Devuelve el tamaño del archivo en MB."""
    return os.path.getsize(path) / (1024 * 1024)

def optimize_image(image_path):
    """Optimiza una imagen individual."""
    original_size = get_file_size_mb(image_path)

    try:
        with Image.open(image_path) as img:
            # Convertir a RGB si es necesario (para PNG con transparencia)
            if img.mode in ('RGBA', 'P'):
                img = img.convert('RGB')

            # Obtener dimensiones originales
            original_width, original_height = img.size

            # Redimensionar si es más ancha que MAX_WIDTH
            if original_width > MAX_WIDTH:
                ratio = MAX_WIDTH / original_width
                new_height = int(original_height * ratio)
                img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                new_width, new_height = img.size
            else:
                new_width, new_height = original_width, original_height

            # Guardar con compresión
            img.save(image_path, 'JPEG', quality=QUALITY, optimize=True)

            new_size = get_file_size_mb(image_path)

            return {
                'original_size': original_size,
                'new_size': new_size,
                'original_dimensions': (original_width, original_height),
                'new_dimensions': (new_width, new_height),
                'success': True
            }
    except Exception as e:
        return {
            'error': str(e),
            'success': False
        }

def main():
    print("=" * 60)
    print("OPTIMIZADOR DE IMÁGENES PARA WEB")
    print(f"Directorio: {IMAGES_DIR}")
    print(f"Ancho máximo: {MAX_WIDTH}px | Calidad: {QUALITY}%")
    print("=" * 60)
    print()

    if not IMAGES_DIR.exists():
        print(f"Error: El directorio {IMAGES_DIR} no existe.")
        return

    # Buscar imágenes
    image_extensions = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
    images = [f for f in IMAGES_DIR.iterdir() if f.suffix in image_extensions]

    if not images:
        print("No se encontraron imágenes para optimizar.")
        return

    print(f"Encontradas {len(images)} imágenes para optimizar.\n")

    total_original = 0
    total_new = 0

    for image_path in sorted(images):
        print(f"Procesando: {image_path.name}...", end=" ")
        result = optimize_image(image_path)

        if result['success']:
            total_original += result['original_size']
            total_new += result['new_size']

            savings = ((result['original_size'] - result['new_size']) / result['original_size']) * 100

            print(f"OK")
            print(f"   {result['original_dimensions'][0]}x{result['original_dimensions'][1]} → {result['new_dimensions'][0]}x{result['new_dimensions'][1]}")
            print(f"   {result['original_size']:.2f} MB → {result['new_size']:.2f} MB (-{savings:.1f}%)")
        else:
            print(f"ERROR: {result['error']}")
        print()

    # Resumen final
    print("=" * 60)
    print("RESUMEN")
    print("=" * 60)
    print(f"Imágenes procesadas: {len(images)}")
    print(f"Tamaño original total: {total_original:.2f} MB")
    print(f"Tamaño nuevo total: {total_new:.2f} MB")
    print(f"Ahorro total: {total_original - total_new:.2f} MB ({((total_original - total_new) / total_original) * 100:.1f}%)")
    print()
    print("¡Optimización completada!")

if __name__ == "__main__":
    main()
