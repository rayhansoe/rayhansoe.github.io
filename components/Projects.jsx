import Link from "next/link";

import StoreGG from "../public/StoreGG.webp";
import MoviesDB from "../public/MoviesDB.webp";
import SolidIslandCart from "../public/solid-island-cart.webp";
import StarMatchGame from "../public/star match game.webp";
import JokesGenerator from "../public/Jokes Generator.webp";

import Container from "./Container";
import Project from "./Project";

const Projects = () => {
	const data = [
		// Data 1
		{
			id: 0,
			title: "Solid Cart App - Simple Cart App",
			desc: (
				<p>
					The MVP Cart App uses{" "}
					<Link href='https://start.solidjs.com/' className='text-primary-color hover:underline'>
						SolidStart
					</Link>{" "}
					Experimental Feature{" "}
					<Link href='https://www.patterns.dev/posts/islands-architecture/' className='text-primary-color hover:underline'>
						Island Architecture
					</Link>{" "}
					which gives you 29kb of JS glory. Backend side using{" "}
					<Link href='https://www.prisma.io/' className='text-primary-color hover:underline'>
						Prisma
					</Link>{" "}
					as ORM,{" "}
					<Link href='https://planetscale.com/' className='text-primary-color hover:underline'>
						PlanetScale
					</Link>{" "}
					as a Serverless MySQL Platform and Deployed to{" "}
					<Link href='https://vercel.com/' className='text-primary-color hover:underline'>
						Vercel
					</Link>
					.
				</p>
			),
			techs: ["SolidJS", "SolidStart", "Prisma", "PlanetScale", "Vercel"],
			linkDemo: "https://solid-cart.vercel.app/",
			linkSource: "https://github.com/rayhansoe/solid-cart",
			srcImg: SolidIslandCart,
			altImg: "Solid Cart App",
		},

		// Data 2
		{
			id: 1,
			title: "StoreGG",
			desc: (
				<p>
					This landing page is from{" "}
					<Link href='https://buildwithangga.com/kelas/full-stack-javascript-developer-2021-website-top-up-voucher-game?thumbnail=pvksVt2Vrr.211&main_leads=searchresult' className='text-primary-color hover:underline'>
						BWA Class
					</Link>{" "}
					that I rebuilt for learning Responsive Layout without any frameworks.
				</p>
			),
			techs: ["HTML", "CSS", "Javascript", "Responsive"],
			linkDemo: "https://storegg-latihan.vercel.app/",
			linkSource: "https://github.com/rayhansoe/STOREGG-LATIHAN",
			srcImg: StoreGG,
			altImg: "StoreGG Design by BWA",
		},

		// Data 3
		{
			id: 2,
			title: "Chuck Norris (Jokes Generator)",
			desc: (
				<p>
					Chuck Norris Jokes Generator that I built using public API (
					<Link href='https://api.chucknorris.io/' className='text-primary-color hover:underline'>
						Chuck Norris API
					</Link>
					). And for tech, I&apos;m using React, Material UI, Styled Component, and React Router.
				</p>
			),
			techs: ["React", "Material UI", "Styled Component", "React Router"],
			linkDemo: "https://chuck-norris-jokes-beta-three.vercel.app/",
			linkSource: "https://github.com/rayhansoe/chuck-norris-jokes",
			srcImg: JokesGenerator,
			altImg: "Chuck Norris (Jokes Generator).",
		},

		// Data 4
		{
			id: 3,
			title: "MoviesDB",
			desc: (
				<p>
					This Movies Database is the first web app that I designed & built using React. I&apos;m
					using this public API (
					<Link href='https://www.themoviedb.org/' className='text-primary-color hover:underline'>
						TMDB
					</Link>
					). And for tech, I&apos;m using only React.
				</p>
			),
			techs: ["HTML", "CSS", "Javascript", "React"],
			linkDemo: "https://rayhansoe.github.io/moviesdb/",
			linkSource: "https://github.com/rayhansoe/moviesdb",
			srcImg: MoviesDB,
			altImg: "Movies Database",
		},

		// Data 5
		{
			id: 4,
			title: "Star Match Game",
			desc: (
				<p>
					A Simple Web App that I made when I first learned reactjs. And I learned from this {""}
					<Link href='https://www.pluralsight.com/courses/react-js-getting-started' className='text-primary-color hover:underline'>
						Pluralsight Course
					</Link>
					.
				</p>
			),
			techs: ["HTML"],
			linkDemo: "https://rayhansoe.github.io/Star-Match-Game/",
			linkSource: "https://github.com/rayhansoe/Star-Match-Game",
			srcImg: StarMatchGame,
			altImg: "Star Match Game",
		},
	];
	const renderProjects = () => {
		return data?.map((p) => <Project {...p} key={p.id} />);
	};

	return (
		<section className='py-6 lg:pb-26 2xl:max-w-[1536px] 2xl:mx-auto 2xl:w-full'>
			<Container>
				<figcaption className='py-6 font-medium italic text-center text-xl opacity-80'>
					<p>
						&quot; I have a design portfolio too, you can{" "}
						<Link href='https://dribbble.com/rayhansoe' target='_blank' className='text-primary-color hover:underline'>
								check here
							
						</Link>
						. &quot;
					</p>
					{/* <p className='py-1 '></p> */}
				</figcaption>
				<div className='flex flex-col gap-14'>
					<>{data?.length === 0 ? <div>Loading... </div> : renderProjects()}</>
				</div>
			</Container>
		</section>
	);
};

export default Projects;
