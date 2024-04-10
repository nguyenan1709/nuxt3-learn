<template>
    <div class="custom-layout h-screen">
        <!-- LayoutsHeader auto import by router-->
        <LayoutsHeader color="bg-indigo-600"/>
        <div class="content">
            <slot></slot>
        </div>
        <LayoutsFooter color="bg-indigo-600"/>
    </div>
</template>