<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Laravel</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" type="text/css" rel="stylesheet" />
    <meta name="csrf-token" value="{{ csrf_token() }}" />
</head>
<body>
    <!-- Preloader -->
    <div id="preloader"></div>
    <div id="app">
        <index></index>
    </div>
    <script src="/js/app.js"></script>
    <script src="/js/template_plug.js"></script>
</body>
</html>