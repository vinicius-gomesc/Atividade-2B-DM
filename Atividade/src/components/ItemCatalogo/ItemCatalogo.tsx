import React from 'react';
import { Pressable, Text, View } from 'react-native';

type ItemCatalogoProps = {
  nome: string;
  descricao: string;
  categoria: string;
  duracao: string;
  onPress: () => void;
};

export class ItemCatalogo extends React.PureComponent<ItemCatalogoProps> {
  render() {
    const { nome, descricao, categoria, duracao, onPress } = this.props;

    return (
      <Pressable onPress={onPress} style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            padding: 12,
            marginBottom: 12,
            justifyContent: 'center',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827' }}>{nome}</Text>
            <Text style={{ fontSize: 13, color: '#4b5563', marginTop: 2 }}>{descricao}</Text>
            <Text style={{ fontSize: 12, color: '#374151', marginTop: 6 }}>Categoria: {categoria}</Text>
            <Text style={{ fontSize: 12, color: '#374151' }}>Duração: {duracao}</Text>
          </View>
        </View>
      </Pressable>
    );
  }
}
