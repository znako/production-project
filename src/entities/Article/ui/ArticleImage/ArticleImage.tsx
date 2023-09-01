import { ArticleBlockImage } from 'entities/Article/model/types/article'
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextAlign } from 'shared/ui/Text/Text';
import cls from './ArticleImage.module.scss';

interface ArticleImageProps {
  className?: string
  block: ArticleBlockImage
}

export const ArticleImage = memo((props: ArticleImageProps) => {
    const {
        className,
        block
    } = props

    return (
        <div className={classNames(cls.ArticleImage, {}, [className])}>
            <img src={block.src} alt={block.title} className={cls.image}/>
            {
                block.title && 
                    <Text text={block.title} align={TextAlign.CENTER}/>
            }
        </div>
    )
})
