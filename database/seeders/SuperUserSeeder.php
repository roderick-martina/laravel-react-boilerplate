<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class SuperUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::factory([
            'first_name' => 'super',
            'last_name' => 'admin',
            'email' => 'super@admin.com',
        ])->create();
    }
}
