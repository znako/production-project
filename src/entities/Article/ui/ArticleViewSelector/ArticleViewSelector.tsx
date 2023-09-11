import { ArticleView } from 'entities/Article'
import React, { memo, useCallback } from 'react'
import TiledIcon from 'shared/assets/icons/tiled.svg';
import ListIcon from 'shared/assets/icons/list.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleViewSelector.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icons';

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    setView?: (view: ArticleView) => void
}

const viewsList = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon
    }
]

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        view,
        setView
    } = props

    const onClickHandler = useCallback(
      (view: ArticleView) => () => {
        setView?.(view)
      },
      [setView],
    )
    

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
        {
            viewsList.map((viewEl, i) => {
            return (
                <Button
                    onClick={onClickHandler(viewEl.view)}
                    theme={ButtonTheme.CLEAR}
                    key={i}
                >
                    <Icon
                        Svg={viewEl.icon}
                        className={classNames(cls.icon, {[cls.notSelected]: viewEl.view !== view})}
                    />
                </Button>
            )
            })
        }
    </div>
  )
})
