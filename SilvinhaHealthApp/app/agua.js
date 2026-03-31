export const calcularAgua = (peso) => {
    const aguaMl = peso * 35;
    const aguaL = aguaMl / 1000;
    return {
        ml: Math.round(aguaMl),
        l: aguaL.toFixed(1)
    };
};
{
    resultado && (
        <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Recomendação diária:</Text>
            <Text style={styles.resultValue}>{resultado.ml} ml</Text>
            <Text style={styles.resultSecondary}>({resultado.l} litros)</Text>
            <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Dicas:</Text>
                <Text style={styles.tip}>• Beba um copo ao acordar</Text>
                <Text style={styles.tip}>• Tenha uma garrafa sempre por
                    perto</Text>
                <Text style={styles.tip}>• Use aplicativos para lembrete</Text>
            </View>
        </View>
    )
}