from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

urlpatterns = [
    path("onboarding-status/", views.OnboardingStatusView.as_view(), name="onboarding-status"),
    path("account-type/", views.AccountTypeView.as_view(), name="account-type"),
    path("profile/update/", views.ProfileUpdateView.as_view(), name="profile-update"),
    path("register-pet/", views.PetRegisterView.as_view(), name="register-pet"),
    path("user-pets/", views.UserPetsView.as_view(), name="user-pets"),
    path("user-scheduled-services/", views.ScheduleServicesView.as_view(), name="user-scheduled-services"),
    path("pets/names/", views.PetNamesView.as_view(), name="pet-names"),
    path("services/user-appointments/", views.AccessScheduledServicesView.as_view(), name="access-scheduled-services"),
    path("service/upcoming-appointments/", views.AccessUpcomingScheduledServicesView.as_view(), name="upcoming-services"),
    path("admin-services/", views.AdminAccessScheduledServicesView.as_view(), name="admin-access"),
    path("upcoming-services/", views.AdminAccessUpcomingScheduledServicesView.as_view(), name="admin-access-upcoming"),
    path("update-service-status/<int:service_id>/<int:user_id>/<str:action>/", views.UpdateServiceStatusView.as_view(), name="update-status"),
    path("cancel-appointment/<int:appointment_id>/", views.CancelAppointmentView.as_view(), name="cancel-appointments"),
    path("admin-notifications/", views.AdminNotificationsView.as_view(), name="admin-notifications"),
    path("admin-notifications/update-read/", views.UpdateAdminNotificationsView.as_view(), name="update-admin-notifications"),
    path("user-notifications/", views.UserNotificationView.as_view(), name="user-notifications"),
    path("user-notifications/update-read/", views.UpdateUserNotificationsView.as_view(), name="update-user-notifications"),
    path("admin-access-unfinished/", views.AccessUnfinishedSchedulesView.as_view(), name="admin-access-unfinished"),
    path("pets/update/<str:pet_name>/", views.UpdatePetDetailsView.as_view(), name="update-pet-details-by-name"),
    path("admin-registered-pets/", views.AdminAccessRegisteredPetsView.as_view(), name="admin-registered-pets"),
    path("admin-registered-pets/update/<str:pet_name>/", views.AdminUpdateRegisteredPestView.as_view(), name="admin-registered-pets-update")
]
