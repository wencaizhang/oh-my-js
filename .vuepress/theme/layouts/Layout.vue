<template>
    <ParentLayout>
        <template v-slot:page-bottom>
            <img src="../asserts/image/bottom-logo.png"
                 style="position:absolute;width:135px;left:calc(100% / 2 + 50px);transform:translateX(-50%);">


        </template>
    </ParentLayout>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout'

  export default {
    name: 'Layout',
    components: {
      ParentLayout
    }

  }
</script>
