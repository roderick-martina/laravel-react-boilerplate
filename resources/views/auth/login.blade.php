<x-app-layout title="Laravel react boilerplate">
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full">
            <div>
                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Welkom terug
                </h2>
            </div>

            <x-validation-errors class="mb-4"/>

            @if (session('status'))
                <div class="mb-4 font-medium text-sm text-green-600">
                    {{ session('status') }}
                </div>
            @endif

            <form class="mt-8" method="POST" action="{{ route('login') }}">
                @csrf
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm">
                    <div>
                        <input
                            aria-label="Email address" type="email" name="email" :value="old('email')" required
                            autofocus
                            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                            placeholder="E-mailadres">
                    </div>
                    <div class="-mt-px">
                        <input aria-label="Password" type="password" name="password" required
                               autocomplete="current-password"
                               class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                               placeholder="Wachtwoord">
                    </div>
                </div>

                <div class="mt-6 flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember" type="checkbox"
                               class="form-checkbox h-4 w-4 text-primary transition duration-150 ease-in-out">
                        <label for="remember" class="ml-2 block text-sm leading-5 text-gray-900">
                            Onthoud mij
                        </label>
                    </div>

                    <div class="text-sm leading-5">
                        <a href="{{ route('password.request') }}"
                           class="font-medium text-primary hover:text-primary-lighter focus:outline-none focus:underline transition ease-in-out duration-150">
                            Wachtwoord vergeten?
                        </a>
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary hover:bg-primary-lighter focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                    >
                        Log in
                    </button>
                </div>
            </form>
            <div class="mt-6 text-center">
                <p>Nog geen account? <a href="{{ route('register') }}" class="text-primary">Aanmelden</a></p>
            </div>
        </div>
    </div>
</x-app-layout>
