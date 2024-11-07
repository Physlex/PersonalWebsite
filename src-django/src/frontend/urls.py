"""
URL Configuration and definitions for the frontend.
"""


from django.urls import re_path
from django.views.generic import TemplateView


"""
Defines a set of views, all of which point to the index.html page. Used for simplifying
the initial fetch request for the client-side codebase.
"""
urlpatterns = [
    re_path(
        r"^.*$",TemplateView.as_view(template_name="index.html"), name="Website Frontend"
    )
]
