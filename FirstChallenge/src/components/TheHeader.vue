<template>
  <main class="p-3 flex items-center justify-between border-b-slate-500 border-b-2">

    <!-- <div class="title"> -->
      <div>
        <h1 class="font-semibold text-3xl text-slate-500">First Milestone</h1>
        <p class="text-slate-500">
          10/100 Tasks done - 10% done | responsinle: Cosima Kroll | Start Date:
          17/07/2021 | Due Date: 17/07/2022
        </p>
      </div>

      
      <div class="pr-3 flex items-center">
        
        <button class="flex px-3 py-2 mx-2 rounded-full bg-blue-200 text-blue-700 ring-1 ring-slate-400 shadow-md">
          <span class="px-2">
            <font-awesome-icon :icon="['fas', 'pen']" />
          </span>
          <h5>EDIT MILESTONE</h5>
        </button>
        
        <button class="px-4 py-2 mx-2 rounded-full bg-slate-50 text-slate-300 ring-1 ring-slate-400 shadow-md">...</button>
        <button class="self-start px-3"><font-awesome-icon :icon="['far', 'times-circle']" size="lg" /></button>
      </div>
  </main>
      
</template>