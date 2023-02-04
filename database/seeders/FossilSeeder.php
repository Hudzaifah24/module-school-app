<?php

namespace Database\Seeders;

use App\Models\Fossil;
use App\Models\User;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class FossilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Fossil::truncate();

        $faker = Faker::create('id_ID');

        $students = User::whereHas('role', function($build) {
            $build->where('role', 'student')->orWhere('role', 'murid');
        })->get();

        foreach ($students as $key => $student) {
            // Bapak
            Fossil::create([
                'name' => $faker->firstNameMale(),
                'status' => 'bapak',
                'phone' => $faker->e164PhoneNumber(),
                'user_id' => $student->id
            ]);

            // Ibu
            Fossil::create([
                'name' => $faker->firstNameFemale(),
                'status' => 'ibu',
                'phone' => $faker->e164PhoneNumber(),
                'user_id' => $student->id
            ]);
        }
    }
}
