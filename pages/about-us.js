import Head from "next/head";
import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/header";

export default function AboutUsPage() {
  return (
    <div>
      <Head>
        <title>About-us</title>
      </Head>

      <Header />

      <h1 className="text-3xl font-bold">About us page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odit,
        rem dolorum suscipit alias maiores dignissimos laudantium quis fuga
        quae, ut necessitatibus accusamus, beatae non nisi? Ratione excepturi
        fuga similique.
      </p>

      <Footer></Footer>
    </div>
  );
}

// export default function Page() {
//   return (
//     <div>
//       <h1>About us page</h1>
//     </div>
//   );
// }
