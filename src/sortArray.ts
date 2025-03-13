export const sortArray = <T,> (array: T[], ...by: ((t: T) => number)[]) =>
    array.sort((a, b) => {
        for(const f of by){
            const [fa, fb] = [a, b].map(t => f(t));
            if(fa !== fb) return fa - fb
        }
        return 0;
    }
);