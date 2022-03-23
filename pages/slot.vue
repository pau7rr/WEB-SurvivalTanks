<template>
<section class=" w-full flex flex-col">
    <coins-field :coins="coins"/>
<div class="mt-12 flex m-auto gap-x-1">
  <slot-machine
        :list="list"
        :trigger="trigger"
        :height="300"
        :width="300"
        @onComplete="onComplete1">
    </slot-machine>
    <slot-machine
        :list="list"
        :trigger="trigger"
        :height="300"
        :width="300"
        @onComplete="onComplete2">
    </slot-machine>
    <slot-machine
        :list="list"
        :trigger="trigger"
        :height="300"
        :width="300"
        @onComplete="onComplete3">
    </slot-machine>
    <slot-machine
        :list="list"
        :trigger="trigger"
        :height="300"
        :width="300"
        @onComplete="onComplete4">
    </slot-machine>
</div>
    <button :class="{' bg-gray-900': buttonEnabled}" :disabled="!buttonEnabled" class=" mx-auto mt-20 w-28 h-10 bg-gray-500 rounded-lg text-white font-bold" @click.prevent="start">SPIN</button>
    
</section>
</template>

<script>
export default {
    middleware: 'checkLogin',
    layout () {
        if (localStorage.getItem('jwt')) {
            return 'logged'
        }
        return 'default'
    },
    async asyncData({store}) {
        await store.dispatch('coins/dispatch')
    },
    data() {
        return {
            list: [
                {text: "1", color: "#FF6666", id: 1},
                {text: "2", color: "#66FF8C", id: 2},
                {text: "3", color: "#FFD966", id: 3},
                {text: "4", color: "#B366FF", id: 4},
                {text: "5", color: "green", id: 5},
                {text: "6", color: "blue", id: 6},
                {text: "7", color: "yellow", id: 7},
                {text: "8", color: "purple", id: 8},
                {text: "9", color: "red", id: 9},
                {text: "T", color: "orange", id: 10},
            ],
            trigger: null,
            result: [0,0,0,0],
            buttonEnabled: true,
            prize: 0,
        };
    },
    computed: {
        coins() { return this.$store.state.coins.coins },
    },
    methods: {
        start() { 
            if (Number(this.coins) < 5) {
                return                
            }
            this.spin(5)
            this.buttonEnabled = false
            this.trigger = new Date();
        },
        onComplete1(data) {
            this.result[0] = data.id
            this.completed()
        },
        onComplete2(data) {
            this.result[1] = data.id
            this.completed()

        },
        onComplete3(data) { 
            this.result[2] = data.id
            this.completed()
        },
        onComplete4(data) { 
            this.result[3] = data.id
            this.completed()
        },
        completed() {
            if (this.result.includes(0)) { 
                return
            }
            this.getPrize(this.result)
            this.buttonEnabled = true
            this.result = [0,0,0,0]
        },
        getPrize(result) {
            
            let repetidos = {};

            result.forEach(function(numero){
                repetidos[numero] = (repetidos[numero] || 0) + 1;
            });

            for(const [key, value] of Object.entries(repetidos)){

                if (value === 2) {
                    console.log('2 -', key)
                    this.prize = key * 2
                    this.sumCoins()
                }
                
                if (value === 3) {
                    console.log('3 -', key)
                    this.prize = key * 4
                    this.sumCoins()
                }
                
                if (value === 4) {
                    console.log('4 -', key)
                    this.prize = (key + key) * 25
                    this.sumCoins()
                }
            }

        },
        async spin(price) {
            await this.$store.dispatch('coins/buyItem', {price})
        },
        async sumCoins() {
            const prize = this.prize 
            await this.$store.dispatch('coins/sumCoins', {prize})
            this.prize = 0
        }
    }
}
</script>

<style>

</style>