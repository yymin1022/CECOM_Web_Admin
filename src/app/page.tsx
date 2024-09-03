import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const buttonStyle = "text-[30px] my-[10px]";
    return (
        <main className="flex flex-col w-full items-center justify-center z-0 pt-[50px]">
            <Link href={"/recruit"}>
                <div className={buttonStyle}>recruit</div>
            </Link>
            <Link href={"/notice"}>
                <div className={buttonStyle}>notice</div>
            </Link>
            <Link href={"/member"}>
                <div className={buttonStyle}>member</div>
            </Link>
            <Link href={"/main"}>
                <div className={buttonStyle}>main</div>
            </Link>
            <Link href={"/activity"}>
                <div className={buttonStyle}>activity</div>
            </Link>

        </main>
    );
}

export default Home;