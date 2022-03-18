import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import firestore from "@react-native-firebase/firestore";
import {
    Container,
    Status,
    Content,
    Header,
    Title,
    Label,
    Info,
    Footer,
    OrderStyleProps,
} from "./styles";

export type OrderProps = OrderStyleProps & {
    id: string;
    patrimony: string;
    equipment: string;
    description: string;
    create_at: string;
};

type Props = {
    data: OrderProps;
};

export function Order({ data }: Props) {
    const theme = useTheme();
    console.log('Data tipo:')
    console.log(JSON.stringify(data.create_at));

    return (
        <Container>
            <Status status={data.status} />

            <Content>
                <Header>
                    <Title>{data.description}</Title>
                    <MaterialIcons
                        name={
                            data.status === "open"
                                ? "hourglass-empty"
                                : "check-circle"
                        }
                        size={24}
                        color={
                            data.status === "open"
                                ? theme.COLORS.SECONDARY
                                : theme.COLORS.PRIMARY
                        }
                    />
                </Header>

                <Footer>
                    <Info>
                        <MaterialIcons
                            name="schedule"
                            size={16}
                            color={theme.COLORS.SUBTEXT}
                        />
                        {/* <Label>{data.create_at.toString()}</Label> */}
                        <Label>DD/MM/YYYY?</Label>
                    </Info>

                    <Info>
                        <MaterialIcons
                            name="my-location"
                            size={16}
                            color={theme.COLORS.SUBTEXT}
                        />
                        <Label>{data.patrimony}</Label>
                    </Info>
                </Footer>
            </Content>
        </Container>
    );
}
