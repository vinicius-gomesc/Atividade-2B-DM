import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';

type ItemCatalogoProps = {
  nome: string;
  descricao: string;
  categoria: string;
  duracao: string;
  imagem?: string;
  onPress: () => void;
};

export class ItemCatalogo extends React.PureComponent<ItemCatalogoProps> {
  render() {
    const { nome, descricao, categoria, duracao, imagem, onPress } = this.props;

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
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {imagem ? (
            <Image
              source={{ uri: imagem }}
              style={{ width: 64, height: 64, borderRadius: 8 }}
              resizeMode="cover"
            />
          ) : (
            <View
              style={{
                width: 64,
                height: 64,
                borderRadius: 8,
                backgroundColor: '#dbeafe',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#1d4ed8', fontWeight: '700' }}>
                {nome.slice(0, 2).toUpperCase()}
              </Text>
            </View>
          )}

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
