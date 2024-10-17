<template>
        <header class="flex justify-between border-b border-slate-300 px-10 py-5">
        <div class="flex items-center gap-4">
            <img src="/logo.png" alt="logo" class="w-10"/>
            <div>
                <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
                <p class="text-sl.
                ">Магазин кроссовок</p>
            </div>
        </div>
        <ul class="flex items-center gap-7">
            <li class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/cart.svg" alt="cart" />
                <span>100 $</span>
            </li>
            <li class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/heart.svg" alt="heart" />
                <span>Закладки</span>
            </li>
            <li class="flex items-center gap-2 text-gray-500 hover:text-black font-bold cursor-pointer">
                <img src="/profile.svg" alt="profile" />
                <span>Профиль</span>
            </li>
        </ul>
    </header>
</template>