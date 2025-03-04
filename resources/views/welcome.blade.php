<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ env('APP_NAME') }}</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet" />
    <link href="{{ asset('css/style.css') }}" type="text/css" rel="stylesheet" />
    <meta name="csrf-token" value="{{ csrf_token() }}" />
    <style type="text/css">
    html, body {
    height: 100%;
    }

    body {
    background: #F8F9FA;
    display: flex;
    flex-flow: column;
    }

    footer {
    margin-top: auto;
    background-color: #222;
    }
    </style>
</head>
<body>
    <!-- Preloader -->
    <div id="app">
        <index></index>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/template_plug.js') }}"></script>
</body>
</html>