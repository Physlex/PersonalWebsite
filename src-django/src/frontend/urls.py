"""
This module defines the urlpatterns for the frontend. Literally just fetches the template
in the `templates` section.
"""


from django.urls import re_path
from django.views.generic import TemplateView


urlpatterns = [
    re_path(r"^(?!api).*$", TemplateView.as_view(template_name="index.html"))
]
