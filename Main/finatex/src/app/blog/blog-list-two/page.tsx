import Link from "next/link"
import TopNavOne from "@/components/Header/TopNav/TopNavOne"
import MenuOne from "@/components/Header/Menu/MenuOne"
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem"
import LayoutListTwo from "@/components/Blog/LayoutListTwo"
import CtaOne from "@/components/Section/CTA/CtaOne"
import Footer from "@/components/Footer/Footer"
import { Suspense } from "react"

export default function BlogListStyleTwo() {
    return (
        <>
            <div className="overflow-x-hidden">
                <header id="header">
                    <TopNavOne />
                    <MenuOne />
                </header>
                <main className="content">
                    <BreadcrumbItem link="Blog" img="/images/banner/about1.png" title="Blog" desc="Discover valuable insights and expert advice on budgeting, investing, and retirement planning in our Financial Blogs section." />
                    <Suspense>
                        <LayoutListTwo />
                    </Suspense>
                    <CtaOne />
                </main>
                <footer id="footer">
                    <Footer />
                </footer>
            </div >
        </>
    )
}