import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <div class="relative">
            <section class="absolute w-screen h-screen flex p-5 flex-col items-center justify-center top-0">
                <div class="flex gap-5 items-center mb-5">
                    <img class="rounded-full w-20 h-20" src={'assets/logo fix.png'} alt="logo" />
                    <h1 class="text-xl font-bold">
                        <p class="text-blue-700">DAFTAR TAMU</p> SEKOLAH IHSAN
                    </h1>
                </div>
                <div class="p-6 lg:w-1/3 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={submit}>
                        <div class="mb-3" id="form-name">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama anda</label>
                            <input name="name" type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nama anda" required />
                        </div>
                        <div class="mb-3" id="form-email">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email anda</label>
                            <input name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email anda" required />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password anda</label>
                            <input name="password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password anda" required />
                        </div>
                        <div class="mb-3">
                            <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Konfimasi Password anda</label>
                            <input name="password_confirmation" type="password" id="password_confirmation" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Konfimasi Password anda" required />
                        </div>

                        <div class="flex items-center justify-end gap-5">
                            <a href={route('login')} class="underline text-blue-700">sudah memiliki akun?</a>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Daftar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
