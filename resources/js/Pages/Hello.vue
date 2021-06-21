<template>
    
    <div class="flex space-x-10 min-h-screen justify-center items-center bg-blue-500">
        <div>
            
            <form action="" @submit.prevent="submit">
                <textarea name="" id="" cols="30" rows="4" v-model="form.text" class="p-2 rounded"></textarea>
                <button class="bg-green-500 font-extrabold text-3xl font-mono rounded-full p-2 text-center block w-full mt-2" type="submit">Add a message</button>
            </form>
        </div>

        <div>
            <div v-for="(message, index) in messages" :key="index" class="bg-gray-100 p-2 mb-1 rounded shadow">
                {{ message.text }}
            </div>
        </div>

        <inertia-link href="/contact">Go to contact page</inertia-link>
    </div>
</template>

<script>
export default {
    props: {
        messages: Array
    },

    data() {
        return {
            form: {text: ''}
        }
    },
    
    methods: {
        submit() {
            // Send data to our back end
            this.$inertia.post('/messages', this.form);
        }
    }
};
</script>