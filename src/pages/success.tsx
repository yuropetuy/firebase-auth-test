import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const SuccessPage: React.FC<PageProps> = () => {
    return(
        <h1>Successfully Logged In</h1>
    )
}

export default SuccessPage

export const Head: HeadFC= () => <title>Success!</title>