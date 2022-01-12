// type A = {
//     a: boolean;
//     b:string;
//     c:boolean;
// }

// type PickBoolean<T> = {
//     [K in keyof T]:T[K] extends boolean?T[K]:never;
// }[keyof T]
// type K = PickBoolean<A>
// type R = Pick<A, K>
//实现PICK
// type MyPick<T, K extends keyof T> = {[P in K]:T[K]};
// interface Todo {
//     title: string
//     description: string
//     completed: boolean
//   }
  
//   type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
//   const todo: TodoPreview = {
//       title: 'Clean room',
//       completed: false,
//   }

//实现readonly
// type MyReadonly<T> = {readonly [P in keyof T]:T[P] };

// interface Todo {
//     title: string
//     description: string
//   }
  
//   const todo: MyReadonly<Todo> = {
//     title: "Hey",
//     description: "foobar"
//   }
  
//   todo.title;
//   todo.title = "Hello" // Error: cannot reassign a readonly property
//   todo.description = "barFoo" // Error: cannot reassign a readonly property

// 传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来。

// 例如：
// type TupleToObject<T extends readonly any[]> = {[P in T[number]]:P};

// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

// let a = typeof tuple;
// type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。

// 例如：
// type First<T extends any[]> = T extends [infer a, ...infer b]?a:never;//T extends []?never:T[0];//T[0];
// type arr1 = ['a', 'b', 'c']
// type arr2 = [3, 2, 1]
// type arr3 = []

// type head1 = First<arr1> // expected to be 'a'
// type head2 = First<arr2> // expected to be 3
// type head3 = First<arr3> // expected to be 

// 创建一个通用的Length，接受一个readonly的数组，返回这个数组的长度。

// 例如：
// type Length<T extends readonly any[]> = T["length"];
// type tesla = ['tesla', 'model 3', 'model X', 'model Y']
// type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

// type teslaLength = Length<tesla> // expected 4
// type spaceXLength = Length<spaceX> // expected 5
// 实现内置的Exclude <T，U>类型，但不能直接使用它本身。

// type MyExclude<T, U> = T extends U?never:T;

// type b = MyExclude<"a" | "b" | "c", "a">
// type c = MyExclude<"a" | "b" | "c", "a" | "b">
// type e = MyExclude<string | number | (() => void), Function>

// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 比如：Promise<ExampleType>，请你返回 ExampleType 类型。
// type MyAwaited<T extends Promise<any>> = T extends Promise<infer a>?a extends Promise<infer b>?MyAwaited<a>:a:never;
// /* _____________ 测试用例 _____________ */
// // type MyAwaited<T extends Promise<any>> = T extends Promise<infer P>
// //   ? P extends Promise<any> ? MyAwaited<P> : P
// //   : any
// type X = Promise<string>
// type Y = Promise<{ field: number }>
// type Z = Promise<Promise<string | number>>

// type b = MyAwaited<Z>;
// // type cases = [
// //   Expect<Equal<MyAwaited<X>, string>>,
// //   Expect<Equal<MyAwaited<Y>, { field: number }>>,
// //   Expect<Equal<MyAwaited<Z>, string | number>>,
// // ]

// // @ts-expect-error
// type error = MyAwaited<number>

// 实现一个 IF 类型，它接收一个条件类型 C ，一个判断为真时的返回类型 T ，以及一个判断为假时的返回类型 F。 C 只能是 true 或者 false， T 和 F 可以是任意类型。

// 举例:
// type If<C, T, F> = C extends true?T:F;

// type A = If<true, 'a', 'b'>  // expected to be 'a'
// type B = If<false, 'a', 'b'> // expected to be 'b'

// 在类型系统里实现 JavaScript 内置的 Array.concat 方法，这个类型接受两个参数，返回的新数组类型应该按照输入参数从左到右的顺序合并为一个新的数组。

// 举例，
// type Concat<T extends unknown[], F extends unknown[]> = [...T, ...F]
// type Result = Concat<[1], [2]> // expected to be [1, 2]

// 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。
// type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
//   ? Equal<First, U> extends true
//     ? true
//     : Includes<Rest, U>
//   : false
// type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
//   ? true
//   : false;

// type Includes<TArr extends any[], Item> = TArr extends [infer E, ...infer Rest]
//   ? Equal<E, Item> extends true
//     ? true
//     : Includes<Rest, Item>
//   : false;
// type test<X> = <T>()=>T extends X?true:false;
// type mm = test<"a">;

// type Equal<X, Y> = ( <T>()=>T extends X?1:2  ) extends ( <T>()=>T extends Y ? 1:2)?true:false;
// type Includes<T extends any[], M> = T extends [infer a, ...infer b]?Equal<a, M> extends true?true:Includes<b, M>:false;
// // 举例来说，
// // type Includes<T, U> = U extends T?true:false;
// type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

// //test
// type test = Equal<"str", any>;


// 在类型系统里实现通用的 Array.push 。

// 举例如下，
// type Push<T extends any[], M> = [...T, M];

// type Result = Push<[1, 2], '3'> // [1, 2, '3']

// 实现类型版本的 Array.unshift。

// 举例，
// type Unshift<T extends any[], U> = [U,...T]
// type Result = Unshift<[1, 2], 0> // [0, 1, 2,]


// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
// type MyParameters<T extends (...args:any[])=>any> = T extends (...args:infer P)=>any?P:never;

// type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// 不使用 ReturnType 实现 TypeScript 的 ReturnType<T> 范型。

// 例如：
// type MyReturnType<T extends Function> = T extends (...args)=>infer M ?M:never;

// const fn = (v: boolean) => {
//   if (v)
//     return 1
//   else
//     return 2
// }

// type a = MyReturnType<typeof fn> // 应推导出 "1 | 2"

// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 范型。

// Omit 会创建一个省略 K 中字段的 T 对象。

// 例如：

// type PICK<T, K extends keyof T> = {[L in K]:T[L]}
// type Excule<T, K> = T extends K?never:T;

// type MyOmit<T, K extends keyof T> = PICK<T, Excule<keyof T, K>>

// type A<T> = keyof T;

// interface Todo {
//   title: string
//   description: string
//   completed: boolean
// }

// type m = A<Todo>

// type TodoPreview = MyOmit<Todo, 'description' | 'title'>

// const todo: TodoPreview = {
//   completed: false,
// }

// type Test<T extends string> = T extends `${"a_"}${infer Reset}`?T:never;

// type a = Test<"a1_11">
// interface Te{
//     [prop: `${"a_"}${string}`]:string;
// }
// let a:Te = {
//     "a_11":"asdfsadf"
// }

type StringToUnion<T extends string> = T extends ''?never:T extends `${infer a}${infer R}`?a|StringToUnion<R>:'';
type Test = '123';
type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
