import { ArticleBlockText } from '../../model/types/article'
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleText.module.scss';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextProps {
  className?: string
  block: ArticleBlockText
}

export const ArticleText = memo((props: ArticleTextProps) => {
  const {
    className,
    block
  } = props

  return (
    <div className={classNames(cls.ArticleText, {}, [className])}>
      {block.title && 
        <Text title={block.title} className={cls.title}/>
      }
      {
        block.paragraphs.map((paragraph) => {
          return <Text text={paragraph} key={paragraph} className={cls.paragraph}/>
        })
      }
    </div>
  )
})
