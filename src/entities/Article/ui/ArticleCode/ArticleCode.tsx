import { ArticleBlockCode } from 'entities/Article/model/types/article'
import React, { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import cls from './ArticleCode.module.scss';

interface ArticleCodeProps {
  className?: string
  block: ArticleBlockCode
}

export const ArticleCode = memo((props: ArticleCodeProps) => {
  const {
    className,
    block
  } = props
    return (
      <div className={classNames(cls.ArticleCode, {}, [className])}>
        <Code code={block.code} />
      </div>
    )
})
