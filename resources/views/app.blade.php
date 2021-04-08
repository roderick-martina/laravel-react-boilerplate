<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
    {{--    <link href="{{ mix('/css/app.css') }}" rel="stylesheet"/>--}}
    {{--    <script src="{{ mix('/js/app.jsx') }}" defer></script>--}}
</head>
<body class="font-sans antialiased">
@inertia
{{--@if (app()->isLocal())--}}
{{--    <script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>--}}
{{--@endif--}}
@production
    @php
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
        $file = "/build/{$manifest['resources/js/app.jsx']['file']}";
        $css = "/build/{$manifest['resources/js/app.jsx']['css'][0]}";
    @endphp

    <script type="module" src="{{$file}}"></script>
    <link rel="stylesheet" href="{{$css}}">
    @else
        <script type="module">
            import RefreshRuntime from "http://localhost:3000/@react-refresh"

            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {
            }
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/js/app.jsx"></script>
        @endproduction
</body>
</html>
