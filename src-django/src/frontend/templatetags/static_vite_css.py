"""
This module implements the custom django tags used in the index template.
"""

from django import template
from django.conf import settings
from django.utils.safestring import mark_safe

from pathlib import Path
import json


register = template.Library()
BASE_DIR = settings.BASE_DIR


### DJANGO TAG IMPL ######################################################################

def static_vite_css_impl() -> str | None:
    """
    Returns the cache-busted names from the django manifest.
    """

    manifest_path = Path(BASE_DIR) / "static" / ".vite" / "manifest.json"
    try:
        with open(manifest_path) as manifest_file:
            manifest_json = json.load(manifest_file)
            css_hotswap = ""
            for css in manifest_json["src/main.tsx"]["css"]:
                css_hotswap += f'<link rel="stylesheet" href="{settings.STATIC_URL}{css}">\n'
            return mark_safe(css_hotswap)

    except(OSError):
        print(f"Error: {manifest_path} could not be found")

    return None


### DJANGO TAG CONNECTION ################################################################

@register.simple_tag
def static_vite_css() -> str:
    """
    Wrapper for css template tag.
    """
    return static_vite_css_impl() or ""
