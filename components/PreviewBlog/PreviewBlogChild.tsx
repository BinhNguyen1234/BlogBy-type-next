import { ReactElement } from "react";
import Style from "../../styles/components/PreviewBlog/PreviewBlogChild.module.sass"

export default function PreviewBlogChild():ReactElement{
    return (
        <>
            <div className={Style.PreviewBlogChild}>
                <div className={Style.img_container}>
                    <img src="https://images.spiderum.com/sp-images/db893640463f11eda52eb39a432dcda2.jpeg"></img>
                </div>
                <div className={Style.title}>nglkasmnfasnf,asnfasnf,fnsfsafasfasfasfasfasfasfsafafasfasfasfasfasfasfasfasfnmsa,fnsa,fnas,fns,fnsa,nf,snfsa,nfsa,nfas,nf,snfas,nfas,nf</div>
                <div className={Style.content}>contensafasfasfsfasfasfsfsafasfasfsafasfasfasfasfasfasfasfafsafasfasfasfsafasfasfsafasfsafsafassasfasfasfasfasfasfasfasfasfasfast</div>
                <div className={Style.date}>date</div>
            </div>
        </>
    )
}