<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;

class LessonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Lesson::truncate();

        $faker = Faker::create('id_ID');

        $lessons = [
            'Matematika',
            'Biologi',
            'IPA',
            'IPS',
        ];

        foreach ($lessons as $key => $lesson) {
            Lesson::create([
                'name' => $lesson
            ]);
        }
    }
}
