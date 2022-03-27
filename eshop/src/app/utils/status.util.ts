export class StatusUtil {
    public static convert(status: string): string {
        switch (status) {
            case 'confirmed': return 'Confirmada'; break;
            case 'waiting_payment': return 'Aguardando Pagamento'; break;
            case 'canceled': return 'Cancelada'; break;
            case 'in_transit': return 'Em Trânsito'; break;
            case 'completed': return 'Finalizada'; break;
            default: return 'Confirmada'; break;
        }
    }
}