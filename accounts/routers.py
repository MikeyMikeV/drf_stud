from rest_framework import routers
from accounts import views as acc_views
from films import views as film_views

router = routers.DefaultRouter()
router.register(r'users', acc_views.UserViewSet)
router.register(r'films', film_views.FilmViewSet)