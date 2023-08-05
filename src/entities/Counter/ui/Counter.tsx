import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'

export const Counter = () => {
    const { t } = useTranslation()

    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const increment = () => {
        console.log(1)
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid='value'>{value}</h1>
            <Button data-testid='incrementBtn' onClick={increment}>{t('increment')}</Button>
            <Button data-testid='decrementBtn' onClick={decrement}>{t('decrement')}</Button>
        </div>
    )
}
