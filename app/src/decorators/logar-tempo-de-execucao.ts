export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        target: any, 
        propertyKey: string, 
        descriptor: PropertyDescriptor
        ) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function(...args: any[]) {
                const divisor = emSegundos ? 1000 : 1;
                const unidade = emSegundos ? 'segundos' : 'milisegundos';
                const t1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const t2 = performance.now();
                console.log(`Tempo de execução do método ${propertyKey} foi de: ${(t2-t1)/divisor} ${unidade}`);
                retorno
            }

            return descriptor;
    }
}