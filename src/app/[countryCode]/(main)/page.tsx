import { Metadata } from "next"

import HeroSection from "@modules/home/components/hero-section"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import FeaturedProducts from "@modules/home/components/featured-products"
import Promises from "@modules/home/components/promises"
import SignatureProducts from "@modules/home/components/signature-products"
import WhyChooseNufatahs from "@modules/home/components/why-us"
import CustomerBenefits from "@modules/home/components/customer-benifits"
import CallToAction from "@modules/home/components/cta"

export const metadata: Metadata = {
  title: "Nufatah's",
  description: "Best Home-made Pitha ",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <HeroSection />
      <div>
        <FeaturedProducts countryCode={countryCode} />
      </div>
      <Promises />

      <SignatureProducts />
      <WhyChooseNufatahs />
      <CustomerBenefits />
      <CallToAction />
    </>
  )
}
