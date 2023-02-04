import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';

export default function Login() {
    const { errors } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    const [
        nisRequired,
        setNisRequired,
    ] = useState(false);

    const HandleChange = event => {
        setNisRequired((current) => !current);
    };

    return (
        <div class="relative">
            <section class="absolute w-screen h-screen flex p-5 flex-col items-center justify-center top-0">
                <div class="flex gap-5 items-center mb-5">
                    <img class="rounded-full w-20 h-20" src="./assets/logo fix.png" alt="logo" />
                    <h1 class="text-xl font-bold">
                        <p class="text-blue-700">LOGIN</p> SEKOLAH IHSAN
                    </h1>
                </div>
                <div class="p-6 lg:w-1/3 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <form action={route('login')} method='post'>
                        <div class="flex mb-3">
                            <div class="flex flex-auto items-center px-3 py-2.5 border border-gray-200 rounded dark:border-gray-700 mr-2">
                                <input onChange={HandleChange} id="murid" type="radio" value="murid" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="murid" class="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Murid</label>
                            </div>
                            <div class="flex flex-auto items-center px-3 py-2.5 border border-gray-200 rounded dark:border-gray-700">
                                <input onChange={HandleChange} checked={nisRequired ? false : true} id="non-murid" type="radio" value="non-murid" name="status" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="non-murid" class="w-full ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bukan murid</label>
                            </div>
                        </div>
                        <div class={nisRequired ? 'hidden' : 'block' + ' mb-3'}>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email anda</label>
                            <input required={nisRequired ? false : true} name="email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email anda" />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div class={!nisRequired ? 'hidden' : 'block' + ' mb-3'}>
                            <label for="nis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nis anda</label>
                            <input required={!nisRequired ? false : true} name="nis" type="number" id="nis" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Nis anda" />
                            <InputError message={errors.nis} className="mt-2" />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password anda</label>
                            <input name="password" type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Password anda" required />
                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div class="flex items-center justify-end gap-5">
                            <a href={route('register')} class="underline text-blue-700">daftar</a>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Masuk</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
