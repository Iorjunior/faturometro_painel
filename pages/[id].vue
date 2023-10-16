<template>
    <main class='flex flex-col items-center h-screen bg-gradient-to-t from-[#00B8B5] to-[#00F595]'>
        <div class='absolute left-6 top-6'>
            <img src="/logo_sebrae.svg" alt="Sebrae" class="h-24"/>
        </div>
        <div class='flex flex-1 flex-col justify-center items-center gap-4'>
            <div class='text-8xl font-bold text-white'>
                FATURÔMETRO
            </div>
            <div class='text-5xl font-bold text-white'>
                {{ espacoSelected }}
            </div>
            <div class='text-9xl font-bold text-white font-mono flex gap-2'>
                R$ {{ valor.toLocaleString('pt-BR', {style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2}) }}
            </div>
        </div>
        <div class='flex h-[65px] bg-red'>

        </div>
        <div class='bg_repeat'>
        </div>
    </main>
</template>
<script>
export default {
    data() {
        return {
            valor: 0.00,
            espacos: ['DO CAMPO À MESA', 'SHOPPING COMPRE DO PEQUENO'],
            espacoSelected: '',
        }
    },
    mounted(){
        let queryId = this.$route.params.id
        let spaceId = parseInt(queryId)
        this.espacoSelected = this.espacos[spaceId - 1]
        
        this.getFaturamento(spaceId)
        setInterval(() => {
            this.getFaturamento(spaceId)
        }, 20000)
    },
    methods:{
        getFaturamento(id){
            fetch(`https://faturometro.vercel.app/faturometro/?id=${id}`)
            .then(res => res.json())
            .then(res =>{
                if(res.total_vendas){
                    this.valor = parseFloat(res.total_vendas)
                }
            }).catch(() =>{
                console.log('falhou')
            })
        }
    }
}
</script>
<style>
.bg_repeat{
    content: '';
    min-height: 65px;
    background-image: url(/hashtag_fe23.svg);
    background-repeat: repeat-x;
    animation: marquee 10s infinite linear;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 0 13px 0;
}

@keyframes marquee {
    0% {
        background-position: 0;
    }
    100%{
        background-position: -1190px;
    }
}
</style>