<template>
    <div class="default-layout h-screen">
        <!-- LayoutsHeader auto import by router-->
        <LayoutsHeader color="bg-orange-200"/>
        <div class="content">
            <slot></slot>
        </div>
        <LayoutsFooter color="bg-orange-200"/>
    </div>
</template>