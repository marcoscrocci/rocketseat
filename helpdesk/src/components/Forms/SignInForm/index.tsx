import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import { FooterButton } from "@components/Controllers/FooterButton";
import { Button } from "@components/Controllers/Button";
import { Input } from "@components/Controllers/Input";
import { Form, Title, Footer } from "./styles";
import { Alert } from "react-native";

export function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    function handleSignIn() {
        if (email === "") {
            Alert.alert("Erro", "E-mail não informado!");
            return;
        };
        if (password === "") {
            Alert.alert("Erro", "Senha não informado!");
            return;
        };
        setIsLoading(true);
        auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
                Alert.alert("Erro", "Erro ao fazer login!");
                setIsLoading(false);
            });
    }

    function handleForgotPassword() {
        if (email === "") {
            Alert.alert("Erro", "E-mail não informado!");
            return;
        };
        
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert("Sucesso", "E-mail enviado com sucesso!");
            })
            .catch(() => {
                Alert.alert("Erro", "Erro ao enviar e-mail!");
            });
    }

    return (
        <Form>
            <Title>Entrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Input
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
            />
            <Button
                title="Entrar"
                onPress={handleSignIn}
                isLoading={isLoading}
            />

            <Footer>
                <FooterButton
                    title="Criar conta"
                    icon="person-add"
                    onPress={() => navigation.navigate("register")}
                />
                <FooterButton
                    title="Esqueci senha"
                    icon="email"
                    onPress={handleForgotPassword}
                />
            </Footer>
        </Form>
    );
}
