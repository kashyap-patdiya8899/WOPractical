import { ReactNode } from 'react'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './styles'

interface Props {
    children: ReactNode
    disableScroll?: boolean
}

export default function ScreenLayout({ children, disableScroll = false }: Props) {
    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            {disableScroll ?
                <View>
                    {children}
                </View>
                :
                <ScrollView style={styles.container}>
                    {children}
                </ScrollView>
            }
        </SafeAreaView>
    )
}