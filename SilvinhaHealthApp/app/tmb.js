export const calcularTMB = (peso, altura, idade, sexo) => {
    const alturaCm = altura * 100;
    let tmb = 0;
    if (sexo === 'masculino') {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * alturaCm) - (5 * idade) - 161;
    }
    return Math.round(tmb);
};
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [idade, setIdade] = useState('');
const [sexo, setSexo] = useState(null);
const [resultado, setResultado] = useState(null);
const handleCalcular = () => {
    if (!peso || !altura || !idade || !sexo) {
        Alert.alert('Erro', 'Preencha todos os campos!');
        return;
    }
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));
    const idadeNum = parseInt(idade);
    if (isNaN(pesoNum) || isNaN(alturaNum) || isNaN(idadeNum) ||
        pesoNum <= 0 || alturaNum <= 0 || idadeNum <= 0) {
        Alert.alert('Erro', 'Digite valores válidos.');
        return;
    }
    const tmb = calcularTMB(pesoNum, alturaNum, idadeNum, sexo);
    setResultado(tmb);
};
{
    resultado && (
        <View style={styles.resultBox}>
            <Text style={styles.resultLabel}>Sua TMB é:</Text>
            <Text style={styles.resultValue}>{resultado} kcal/dia</Text>
            <View style={styles.infoBox}>
                <Text style={styles.infoTitle}>Para manter o peso:</Text>
                <Text style={styles.infoText}>
                    Sedentário: {Math.round(resultado * 1.2)} kcal{'\n'}
                    Leve atividade: {Math.round(resultado * 1.375)} kcal{'\n'}
                    Moderado: {Math.round(resultado * 1.55)} kcal{'\n'}
                    Intenso: {Math.round(resultado * 1.725)} kcal
                </Text>
            </View>
        </View>
    )
}