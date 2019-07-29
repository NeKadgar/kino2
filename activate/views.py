from django.http import HttpResponse

def myview(request):
    return HttpResponse("", content_type="text")