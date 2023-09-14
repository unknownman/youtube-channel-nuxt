<template>
  <div>
    <ui-layout-header />
    <div class="bg-slate-100/70 py-10">
      <div class="mx-auto bg-slate-50 container p-5 my-5 rounded-xl shadow-inner">
        <slot />
      </div>
    </div>
    <ui-layout-footer />
  </div>
</template>
