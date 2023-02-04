<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $faker = Faker::create('id_ID');

        for ($i=0; $i < 10; $i++) {
            User::create([
                'name' => $faker->name(),
                'nis' => rand(1111, 9999),
                'email' => $faker->email(),
                'password' => Hash::make(1234),
                'role_id' => rand(1, 3),
            ]);
        }
    }
}
