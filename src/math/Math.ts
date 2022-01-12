// export class Test<T extends new()=>{size:infer S}>{

//     public add(t:T):T{
//         return t;
//     }

//     public remoeve(v2:V extends new()=>{size:S}){

//     }
// }

// export class TT extends Test<TT>{
//     public size = 2;
//     remove(){

//     }
// }
// export class TT2 extends Test<TT2>{
//     public size = 3;
//     mult(){

//     }
// }

// export class V {

// }

// export class V2{
//     public size = 2;
// }

// let t1 = new TT();
// let t2 = new TT2();

// let t3 = t1.add(t2);
// let t4 = t2.add(t2)