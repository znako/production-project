import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentForm'
import { AddCommentFormActions, AddCommentFormReducers } from '../../model/slice/addCommentFormSlice'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './AddCommentForm.module.scss'
import { HStack } from 'shared/ui/Stack'

interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: AddCommentFormReducers
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment
    } = props

    const { t } = useTranslation()
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onChangeHandler = useCallback(
        (value: string) => {
            dispatch(AddCommentFormActions.setText(value))
        },
        [dispatch]
    )

    const onClickHandler = useCallback(
        () => {
            onSendComment(text || '')
            onChangeHandler('')
        },
        [dispatch, text, onSendComment, onChangeHandler]
    )

    return (
        <DynamicModuleLoader reducers={reducers} >
            <HStack
                justify='between'
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onChangeHandler}
                    placeholder={t('Напишите комментарий')}
                />
                <Button
                    onClick={onClickHandler}
                >
                    {t('Отправить')}
                </Button>
            </HStack>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm
