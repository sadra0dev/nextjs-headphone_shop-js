import Head from "next/head"
import { NextStudio } from "next-sanity/studio"
import { NextStudioHead } from "next-sanity/studio/head"
import { StudioLayout, StudioProvider, defineConfig } from "sanity"
import { visionTool } from "@sanity/vision"
import { deskTool } from "sanity/desk"
import { apiVersion, dataset, projectId } from "@project/admin/env"
import { schema } from "@project/admin/schema"

const config = defineConfig({
    basePath: "/admin",
    projectId,
    dataset,
    schema,
    plugins: [deskTool(), visionTool({ defaultApiVersion: apiVersion })],
})

export default function StudioPage() {
    return (
        <div>
            <Head>
                <NextStudioHead favicons={false} />
            </Head>
            <NextStudio config={config}>
                <StudioProvider config={config}>
                    <StudioLayout />
                </StudioProvider>
            </NextStudio>
        </div>
    )
}
